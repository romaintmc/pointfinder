package com.example.pointfinderv1;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.core.app.NotificationCompat;

import java.security.SecureRandom;

public class ForgotPassword extends Activity {

    DatabasesHelper databasesHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.frogot_password);

        databasesHelper = new DatabasesHelper(this);


        TextView loginRedirect = findViewById(R.id.loginRedirect);
        Button sendEmailButton = findViewById(R.id.sendEmailButton);
        final EditText userEmail = findViewById(R.id.userEmail);

        loginRedirect.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Intent pour démarrer LoginActivity
                Intent intent = new Intent(ForgotPassword.this, LoginActivity.class);
                startActivity(intent);
            }
        });

        sendEmailButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String email = userEmail.getText().toString();
                String temporaryPassword = generateTemporaryPassword(5);

                databasesHelper.updatePassword(email, temporaryPassword);
                NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
                String NOTIFICATION_CHANNEL_ID = "channel_id_01";

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    NotificationChannel notificationChannel = new NotificationChannel(NOTIFICATION_CHANNEL_ID, "My Notifications", NotificationManager.IMPORTANCE_DEFAULT);
                    notificationChannel.setDescription("Channel description");
                    notificationManager.createNotificationChannel(notificationChannel);
                }

                NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(ForgotPassword.this, NOTIFICATION_CHANNEL_ID);
                notificationBuilder.setAutoCancel(true)
                        .setDefaults(Notification.DEFAULT_ALL)
                        .setWhen(System.currentTimeMillis())
                        .setSmallIcon(R.mipmap.icon_pointfinder2_)
                        .setContentTitle("Password Reset")
                        .setContentText("Your temporary password is: " + temporaryPassword)
                        .setContentInfo("Info");

                notificationManager.notify(1, notificationBuilder.build());

                Toast.makeText(ForgotPassword.this, "Notification sent", Toast.LENGTH_SHORT).show();
            }
        });

    }

    private String generateTemporaryPassword(int length) {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        SecureRandom random = new SecureRandom();
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            sb.append(characters.charAt(random.nextInt(characters.length())));
        }
        return sb.toString();
    }

    private void sendEmail(String email, String temporaryPassword) {
        String subject = "Temporary Password";
        String message = "Your temporary password is: " + temporaryPassword;

        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.putExtra(Intent.EXTRA_EMAIL, new String[]{email});
        intent.putExtra(Intent.EXTRA_SUBJECT, subject);
        intent.putExtra(Intent.EXTRA_TEXT, message);
        intent.setType("message/rfc822");
        startActivity(Intent.createChooser(intent, "Choose an email client"));
    }

}
