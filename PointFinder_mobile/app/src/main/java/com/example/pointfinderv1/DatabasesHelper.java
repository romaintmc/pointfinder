package com.example.pointfinderv1;

import android.annotation.SuppressLint;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class DatabasesHelper extends SQLiteOpenHelper {

    public static final String databaseName = "Signup_db";

    public DatabasesHelper(@Nullable Context context) {
        super(context, databaseName, null, 2);
    }


    @Override
    public void onCreate(SQLiteDatabase MyDatabase) {
        MyDatabase.execSQL("create Table allusers(email TEXT primary key, password TEXT, username TEXT)");
        ContentValues adminValues = new ContentValues();
        MyDatabase.insert("allusers", null, adminValues);

    }

    public boolean updatePassword(String email, String newPassword){
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put("password", newPassword);
        int update = db.update("allusers", contentValues, "email = ?", new String[] {email});
        return update > 0;
    }

    public boolean updateEmail(String oldEmail, String newEmail) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put("email", newEmail); // Met à jour l'email
        int update = db.update("allusers", contentValues, "email = ?", new String[] {oldEmail});
        db.close();
        return update > 0;
    }

    public boolean deleteAccount(String email) {
        SQLiteDatabase db = this.getWritableDatabase();
        int delete = db.delete("allusers", "email = ?", new String[] {email});
        db.close();
        return delete > 0;
    }

    public boolean updateUsername(String email, String newUsername){
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put("username", newUsername);
        int update = db.update("allusers", contentValues, "email = ?", new String[] {email});
        db.close();
        return update > 0;
    }

    public String getUsername(String email) {
        SQLiteDatabase db = this.getReadableDatabase();
        String username = email; // Utilisez l'email comme username par défaut
        Cursor cursor = db.query("allusers", new String[] {"username"}, "email=?", new String[] {email}, null, null, null);
        if (cursor != null && cursor.moveToFirst()) {
            int usernameIndex = cursor.getColumnIndex("username");
            if (usernameIndex != -1) { // Vérifiez si la colonne username existe
                username = cursor.getString(usernameIndex);
                if (username == null || username.isEmpty()) {
                    username = email; // Fallback sur l'email si le username est null ou vide
                }
            }
            cursor.close();
        }
        return username;
    }

    @Override
    public void onUpgrade(SQLiteDatabase MyDatabase, int oldVersion, int newVersion) {
        if (oldVersion < 2) {
            // Ajoute la colonne username pour les versions antérieures
            MyDatabase.execSQL("ALTER TABLE allusers ADD COLUMN username TEXT DEFAULT ''");
        }
    }
    public boolean insertData(String email, String password){
        SQLiteDatabase MyDatabase = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put("email",email);
        contentValues.put("password",password);
        long result = MyDatabase.insert("allusers", null, contentValues);
        if (result == -1){
            return false;
        } else{
            return true;
        }
    }

    public Boolean checkEmail(String email){
        SQLiteDatabase MyDatabase = this.getWritableDatabase();
        Cursor cursor = MyDatabase.rawQuery("Select * from allusers where email = ?", new String[]{email});

        if (cursor.getCount() > 0 ){
            return true;
        } else {
            return false;
        }
    }

    public Boolean checkEmailPassword(String email, String password){
        SQLiteDatabase MyDatabase = this.getWritableDatabase();
        Cursor cursor = MyDatabase.rawQuery("Select * from allusers where email = ? and password = ?", new String[]{email, password});

        if (cursor.getCount() > 0 ){
            return true;
        } else {
            return false;
        }

    }
}
