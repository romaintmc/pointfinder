package com.example.pointfinderv1;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.ToggleButton;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class ProfileActivity extends AppCompatActivity {

    DatabasesHelper databasesHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        databasesHelper = new DatabasesHelper(this);

        Button btnReturn = findViewById(R.id.btnReturn);

        String userEmail = getIntent().getStringExtra("USER_EMAIL");
        TextView emailTextView = findViewById(R.id.emailTextView);

        String username = databasesHelper.getUsername(userEmail);
        emailTextView.setText(username);

        ToggleButton toggleEmail = findViewById(R.id.toggleEmail);
        LinearLayout panelEmail = findViewById(R.id.panelEmail);
        toggleEmail.setOnCheckedChangeListener((buttonView, isChecked) -> {
            panelEmail.setVisibility(isChecked ? View.VISIBLE : View.GONE);
        });

        ToggleButton toggleChangePassword = findViewById(R.id.togglePassword);
        LinearLayout panelChangePassword = findViewById(R.id.panelPassword);
        toggleChangePassword.setOnCheckedChangeListener((buttonView, isChecked) -> {
            panelChangePassword.setVisibility(isChecked ? View.VISIBLE : View.GONE);
        });

        ToggleButton toggleDeleteAccount = findViewById(R.id.toggleDeleteAccount);
        LinearLayout panelDeleteAccount = findViewById(R.id.panelDeleteAccount);
        toggleDeleteAccount.setOnCheckedChangeListener((buttonView, isChecked) -> {
            panelDeleteAccount.setVisibility(isChecked ? View.VISIBLE : View.GONE);
        });

        ToggleButton toggleUsername = findViewById(R.id.toggleUsername);
        LinearLayout panel_username = findViewById(R.id.panel_username);
        toggleUsername.setOnCheckedChangeListener((buttonView, isChecked) -> {
            panel_username.setVisibility(isChecked ? View.VISIBLE : View.GONE);
        });

        btnReturn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Intent pour démarrer LoginActivity
                Intent intent = new Intent(ProfileActivity.this, MainActivity.class);
                intent.putExtra("USER_EMAIL", userEmail);
                startActivity(intent);
            }
        });

        Button btnConfirmEmail = findViewById(R.id.btnSaveEmail);
        Button btnSavePassword = findViewById(R.id.btnSavePassword);
        Button btnDeleteAccount = findViewById(R.id.btnDeleteAccount);
        Button btnusername = findViewById(R.id.btnusername);

        btnusername.setOnClickListener(v -> {
            EditText edtNewUsername = findViewById(R.id.profile_new_username);
            EditText edtPassword = findViewById(R.id.mdp_current);

            String newUsername = edtNewUsername.getText().toString();
            String password = edtPassword.getText().toString();

            // Vérifiez si le mot de passe correspond au mot de passe actuel de l'utilisateur
            if (databasesHelper.checkEmailPassword(userEmail, password)) {
                // Mettre à jour le username en base
                boolean updated = databasesHelper.updateUsername(userEmail, newUsername);
                if (updated) {
                    Toast.makeText(ProfileActivity.this, "Username updated successfully.", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(ProfileActivity.this, "Username update failed.", Toast.LENGTH_SHORT).show();
                }
            } else {
                Toast.makeText(ProfileActivity.this, "Incorrect password.", Toast.LENGTH_SHORT).show();
            }
        });

        btnConfirmEmail.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText edtCurrentEmail = findViewById(R.id.profile_current_email);
                EditText edtNewEmail = findViewById(R.id.profile_new_email);
                EditText edtConfirmNewEmail = findViewById(R.id.profile_confirm_new_email);
                EditText edtPassword = findViewById(R.id.mdp_mail);

                String currentEmail = edtCurrentEmail.getText().toString();
                String newEmail = edtNewEmail.getText().toString();
                String confirmNewEmail = edtConfirmNewEmail.getText().toString();
                String password = edtPassword.getText().toString();

                if (!currentEmail.equals(userEmail)) {
                    Toast.makeText(ProfileActivity.this, "The current email is incorrect.", Toast.LENGTH_SHORT).show();
                    return;
                }

                if (!newEmail.equals(confirmNewEmail)) {
                    Toast.makeText(ProfileActivity.this, "The new emails do not match.", Toast.LENGTH_SHORT).show();
                    return;
                }

                if (!databasesHelper.checkEmailPassword(userEmail, password)) {
                    Toast.makeText(ProfileActivity.this, "Incorrect password.", Toast.LENGTH_SHORT).show();
                    return;
                }

                new AlertDialog.Builder(ProfileActivity.this)
                        .setTitle("Confirmation")
                        .setMessage("Are you sure you want to confirm this modification?")
                        .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {
                                boolean updated = databasesHelper.updateEmail(userEmail, newEmail);
                                if (updated) {
                                    Toast.makeText(ProfileActivity.this, "Email updated successfully.", Toast.LENGTH_SHORT).show();
                                } else {
                                    Toast.makeText(ProfileActivity.this, "Email update failed.", Toast.LENGTH_SHORT).show();
                                }
                            }
                        })
                        .setNegativeButton("No", null)
                        .setIcon(android.R.drawable.ic_dialog_alert)
                        .show();
            }
        });


        btnSavePassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new AlertDialog.Builder(ProfileActivity.this)
                        .setTitle("Confirmation")
                        .setMessage("Are you sure you want to confirm this modification?")
                        .setPositiveButton("Yes", (dialog, which) -> {
                            EditText newPass = findViewById(R.id.profile_new_password);
                            EditText confirmNewPass = findViewById(R.id.profile_confirm_new_password);
                            EditText currentPass = findViewById(R.id.profile_current_password);

                            String newPassStr = newPass.getText().toString();
                            String confirmNewPassStr = confirmNewPass.getText().toString();
                            String currentPassStr = currentPass.getText().toString();
                            if (!newPassStr.equals(confirmNewPassStr)) {
                                Toast.makeText(ProfileActivity.this, "New passwords do not match", Toast.LENGTH_SHORT).show();
                                return;
                            }
                            if (!databasesHelper.checkEmailPassword(userEmail, currentPassStr)) {
                                            Toast.makeText(ProfileActivity.this, "Current password is incorrect", Toast.LENGTH_SHORT).show();
                                            return;
                                        }
                            if (databasesHelper.updatePassword(userEmail, newPassStr)) {
                                            Toast.makeText(ProfileActivity.this, "Password updated successfully", Toast.LENGTH_SHORT).show();
                                        } else {
                                            Toast.makeText(ProfileActivity.this, "Password update failed", Toast.LENGTH_SHORT).show();
                                        }
                        })
                        .setNegativeButton("No", null)
                        .setIcon(android.R.drawable.ic_dialog_alert)
                        .show();
            }
        });

        btnDeleteAccount.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText edtDeleteEmail = findViewById(R.id.profile_delete_email);
                EditText edtDeletePassword = findViewById(R.id.profile_delete_password);

                String deleteEmail = edtDeleteEmail.getText().toString();
                String deletePassword = edtDeletePassword.getText().toString();

                if (!deleteEmail.equals(userEmail)) {
                    Toast.makeText(ProfileActivity.this, "The email does not match your account.", Toast.LENGTH_SHORT).show();
                    return;
                }

                if (!databasesHelper.checkEmailPassword(userEmail, deletePassword)) {
                    Toast.makeText(ProfileActivity.this, "Incorrect password.", Toast.LENGTH_SHORT).show();
                    return;
                }

                new AlertDialog.Builder(ProfileActivity.this)
                        .setTitle("Confirmation")
                        .setMessage("Are you sure you want to delete your account?")
                        .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {
                                boolean deleted = databasesHelper.deleteAccount(userEmail);
                                if (deleted) {
                                    Toast.makeText(ProfileActivity.this, "Account deleted successfully.", Toast.LENGTH_SHORT).show();
                                    // Rediriger vers LoginActivity
                                    Intent intent = new Intent(ProfileActivity.this, LoginActivity.class);
                                    intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_NEW_TASK); // Nettoie l'historique des activités
                                    startActivity(intent);
                                    finish(); // Ferme l'activité actuelle
                                } else {
                                    Toast.makeText(ProfileActivity.this, "Account deletion failed.", Toast.LENGTH_SHORT).show();
                                }
                            }
                        })
                        .setNegativeButton("No", null)
                        .setIcon(android.R.drawable.ic_dialog_alert)
                        .show();
            }
        });


    }
}