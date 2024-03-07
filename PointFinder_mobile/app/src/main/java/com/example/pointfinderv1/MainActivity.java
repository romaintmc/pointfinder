package com.example.pointfinderv1;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.bottomsheet.BottomSheetDialog;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import org.osmdroid.api.IMapController;
import org.osmdroid.config.Configuration;
import org.osmdroid.util.GeoPoint;
import org.osmdroid.views.MapView;
import org.osmdroid.views.overlay.ItemizedIconOverlay;
import org.osmdroid.views.overlay.ItemizedOverlayWithFocus;
import org.osmdroid.views.overlay.OverlayItem;
import java.util.ArrayList;
import java.util.HashMap;

public class MainActivity extends AppCompatActivity {
    private MapView map;
    private ArrayList<String> selectedCategories = new ArrayList<>();
    private HashMap<String, OverlayItemDetails> itemDetailsMap = new HashMap<>();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Important: Initialize the configuration before inflating or creating the map view
        Configuration.getInstance().load(getApplicationContext(), android.preference.PreferenceManager.getDefaultSharedPreferences(getApplicationContext()));
        setContentView(R.layout.activity_main);

        String userEmail = getIntent().getStringExtra("USER_EMAIL");



        FloatingActionButton fab_logout = findViewById(R.id.fab_logout);
        FloatingActionButton fab_profile = findViewById(R.id.fab_profile);

        fab_logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Intent pour démarrer LoginActivity
                Intent intent = new Intent(MainActivity.this, LoginActivity.class);
                startActivity(intent);
            }
        });

        fab_profile.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Intent pour démarrer LoginActivity
                Intent intent = new Intent(MainActivity.this, ProfileActivity.class);
                intent.putExtra("USER_EMAIL", userEmail);
                startActivity(intent);
            }
        });

        map = findViewById(R.id.map);
        map.setTileSource(org.osmdroid.tileprovider.tilesource.TileSourceFactory.MAPNIK);
        map.setBuiltInZoomControls(true);
        map.setMultiTouchControls(true);

        IMapController mapController = map.getController();
        mapController.setZoom(15.0);
        GeoPoint startPoint = new GeoPoint(48.390394, -4.486076); // Brest, France
        mapController.setCenter(startPoint);

        addMarkers();

        FloatingActionButton fabShowBottomSheet = findViewById(R.id.fab_show_bottom_sheet);
        fabShowBottomSheet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showBottomSheetDialog();
            }
        });
    }

    class ItemDescription {
        String address;
        String url;
        String openingDays;
        String phoneNumber;

        ItemDescription(String address, String url, String openingDays, String phoneNumber) {
            this.address = address;
            this.url = url;
            this.openingDays = openingDays;
            this.phoneNumber = phoneNumber;
        }
    }

    public class OverlayItemDetails {
        String address;
        String url;
        String openingDays;
        String phoneNumber;

        public OverlayItemDetails(String address, String url, String openingDays, String phoneNumber) {
            this.address = address;
            this.url = url;
            this.openingDays = openingDays;
            this.phoneNumber = phoneNumber;
        }
    }


    private void addMarkers() {
        ArrayList<OverlayItem> items = new ArrayList<>();

        OverlayItem user = new OverlayItem("you are here", "user", new GeoPoint(48.406693848772704, -4.49566580619935));
        user.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.user), 30, 30));

        OverlayItem item1 = new OverlayItem("Cale brestoise", "restaurant", new GeoPoint(48.38312180059542, -4.483489170869044));
        item1.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.map), 30, 30));
        itemDetailsMap.put(item1.getTitle(), new OverlayItemDetails("38 quai de la douane, Brest 29200", "https://www.lacalebrestoise.bzh/", "tuesday, wednesday, thursday, saturday", "0251456698"));

        OverlayItem item2 = new OverlayItem("Merluberlu", "restaurant", new GeoPoint(48.38291969479583, -4.484903453929567));
        item2.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.map), 30, 30));
        itemDetailsMap.put(item2.getTitle(), new OverlayItemDetails("26 quai de la douane, Brest 29200", "https://www.merluberlubrest.fr/", "tuesday, wednesday, thursday, saturday", "0656988547"));

        OverlayItem item3 = new OverlayItem("Le Barado'zic", "bar", new GeoPoint(48.38414746051849, -4.493857269041772));
        item3.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.map), 30, 30));
        itemDetailsMap.put(item3.getTitle(), new OverlayItemDetails("3 Rue de Siam, 29200 Brest", "", "tuesday, thursday, saturday", "07455822136"));

        OverlayItem item4 = new OverlayItem("Hotel de la rade", "hotel", new GeoPoint(48.38501853010583, -4.493795041923594));
        item4.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.map), 30, 30));
        itemDetailsMap.put(item4.getTitle(), new OverlayItemDetails("6 Rue de Siam, 29200 Brest", "http://de-la-rade.hotelsbrest.net/fr/", "tuesday, thursday, saturday", "0215366548"));

        OverlayItem item5 = new OverlayItem("Tabernak tattoo", "tattoo", new GeoPoint(48.386652858380465, -4.492412095348417));
        item5.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.map), 30, 30));
        itemDetailsMap.put(item5.getTitle(), new OverlayItemDetails("44 Rue Trav., 29200 Brest", "https://www.tabarnak-tattoo.com/", "tuesday, thursday, saturday", "0215366548"));

        OverlayItem item6 = new OverlayItem("Multiplex", "cinema", new GeoPoint(48.39066284218174, -4.487727885786743));
        item6.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.map), 30, 30));
        itemDetailsMap.put(item6.getTitle(), new OverlayItemDetails("10 Av. Georges Clemenceau, 29200 Brest", "http://multiplex/fr/", "tuesday, thursday, saturday", "0215366548"));

        OverlayItem item7 = new OverlayItem("Chez muller", "bar", new GeoPoint(48.39692169186648, -4.478798582217274));
        item7.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.map), 30, 30));
        itemDetailsMap.put(item7.getTitle(), new OverlayItemDetails("Place guerin", "http://muller/fr/", "tuesday, thursday, saturday", "0215366548"));

        OverlayItem item8 = new OverlayItem("Les studios", "cinema", new GeoPoint(48.39607118168748, -4.476895104478624));
        item8.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.map), 30, 30));
        itemDetailsMap.put(item8.getTitle(), new OverlayItemDetails("136 Rue Jean Jaurès, 29200 Brest", "http://studio/fr/", "tuesday, thursday, saturday", "0215366548"));

        OverlayItem item9 = new OverlayItem("Hotel kyriad", "hotel", new GeoPoint(48.39694937612298, -4.4755055286583145));
        item9.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.map), 30, 30));
        itemDetailsMap.put(item9.getTitle(), new OverlayItemDetails("157 Rue Jean Jaurès, 29200 Brest", "http://kyriad/fr/", "tuesday, thursday, saturday", "0215366548"));

        OverlayItem item10 = new OverlayItem("Lycées la pérouse-kerichen", "school", new GeoPoint(48.40633971231712, -4.481145322888382));
        item10.setMarker(resizeDrawable(getResources().getDrawable(R.drawable.map), 30, 30));
        itemDetailsMap.put(item10.getTitle(), new OverlayItemDetails("6 Rue de Siam, 29200 Brest", "https://lycee-la-perouse-kerichen-brest.ac-rennes.fr/", "tuesday, thursday, saturday", "0215366548"));

        items.add(user);

        ArrayList<OverlayItem> allItems = new ArrayList<>();
        allItems.add(item1);
        allItems.add(item2);
        allItems.add(item3);
        allItems.add(item4);
        allItems.add(item5);
        allItems.add(item6);
        allItems.add(item7);
        allItems.add(item8);
        allItems.add(item9);
        allItems.add(item10);

        // Filtrer les items basés sur selectedCategories
        for (OverlayItem item : allItems) {
            if (selectedCategories.contains(item.getSnippet())) {
                items.add(item);
            }
        }

        ItemizedOverlayWithFocus<OverlayItem> overlay = new ItemizedOverlayWithFocus<>(this, items,
                new ItemizedIconOverlay.OnItemGestureListener<OverlayItem>() {
                    @Override
                    public boolean onItemSingleTapUp(final int index, final OverlayItem item) {
                        OverlayItemDetails details = itemDetailsMap.get(item.getTitle());
                        if (details != null) {
                            // Affichage des détails dans une AlertDialog
                            new AlertDialog.Builder(MainActivity.this)
                                    .setTitle(item.getTitle())
                                    .setMessage(item.getSnippet() + "\n\nAddress: " + details.address +
                                            "\n\nURL: " + details.url +
                                            "\n\nOpen days: " + details.openingDays +
                                            "\n\nPhone number: " + details.phoneNumber)
                                    .setPositiveButton(android.R.string.ok, (dialog, which) -> dialog.dismiss())
                                    .show();
                        }
                        return true;
                    }

                    @Override
                    public boolean onItemLongPress(final int index, final OverlayItem item) {
                        return false;
                    }
                });
        overlay.setFocusItemsOnTap(true);

        map.getOverlays().clear();
        map.getOverlays().add(overlay);
        map.invalidate();
    }

    private void showBottomSheetDialog() {
        View bottomSheetView = getLayoutInflater().inflate(R.layout.bottom_sheet_layout, null);
        BottomSheetDialog bottomSheetDialog = new BottomSheetDialog(this);
        bottomSheetDialog.setContentView(bottomSheetView);

        CheckBox checkBox1 = bottomSheetView.findViewById(R.id.checkBox1);
        CheckBox checkBox2 = bottomSheetView.findViewById(R.id.checkBox2);
        CheckBox checkBox3 = bottomSheetView.findViewById(R.id.checkBox3);
        CheckBox checkBox4 = bottomSheetView.findViewById(R.id.checkBox4);
        CheckBox checkBox5 = bottomSheetView.findViewById(R.id.checkBox5);
        CheckBox checkBox6 = bottomSheetView.findViewById(R.id.checkBox6);



        CompoundButton.OnCheckedChangeListener listener = (buttonView, isChecked) -> {
            CheckBox[] checkBoxes = {checkBox1, checkBox2, checkBox3, checkBox4, checkBox5, checkBox6};
            selectedCategories.clear();
            int checkedCount = 0;
            for (CheckBox checkBox : checkBoxes) {
                if (checkBox.isChecked()) {
                    checkedCount++;
                }
            }
            if (isChecked && checkedCount > 3) {
                buttonView.setChecked(false);
                Toast.makeText(MainActivity.this, "You can select up to 3 options only.", Toast.LENGTH_SHORT).show();
                return;
            }

            Button btnSaveCheckBox = bottomSheetView.findViewById(R.id.btnsavecheckbox);
            btnSaveCheckBox.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    selectedCategories.clear();
                    if (checkBox1.isChecked()) selectedCategories.add("restaurant");
                    if (checkBox2.isChecked()) selectedCategories.add("bar");
                    if (checkBox3.isChecked()) selectedCategories.add("hotel");
                    if (checkBox4.isChecked()) selectedCategories.add("tattoo");
                    if (checkBox5.isChecked()) selectedCategories.add("school");
                    if (checkBox6.isChecked()) selectedCategories.add("cinema");
                    addMarkers();
                    bottomSheetDialog.dismiss();
                }
            });
        };

        checkBox1.setOnCheckedChangeListener(listener);
        checkBox2.setOnCheckedChangeListener(listener);
        checkBox3.setOnCheckedChangeListener(listener);
        checkBox4.setOnCheckedChangeListener(listener);
        checkBox5.setOnCheckedChangeListener(listener);
        checkBox6.setOnCheckedChangeListener(listener);

        bottomSheetDialog.show();
    }





    private Drawable resizeDrawable(Drawable image, int width, int height) {
        Bitmap b = ((BitmapDrawable)image).getBitmap();
        Bitmap bitmapResized = Bitmap.createScaledBitmap(b, width, height, false);
        return new BitmapDrawable(getResources(), bitmapResized);
    }

    private void showToast(Context context, String text) {
        Toast.makeText(context, text, Toast.LENGTH_LONG).show();
    }

    @Override
    public void onPause(){
        super.onPause();
        map.onPause();
    }

    @Override
    public void onResume(){
        super.onResume();
        map.onResume();
    }
}