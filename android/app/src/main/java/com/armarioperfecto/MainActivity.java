package com.armarioperfecto;

import android.os.Bundle;

import com.blitzapp.animatedsplash.animation.AddImageView;
import com.facebook.react.ReactActivity;



import static com.blitzapp.animatedsplash.animation.AddImageView.FIT_XY;
import static com.blitzapp.animatedsplash.animation.Splash.SCALE;
import static com.blitzapp.animatedsplash.animation.Splash.SLIDE;
import static com.blitzapp.animatedsplash.animation.Splash.SPLASHSLIDELEFT;
import static com.blitzapp.animatedsplash.animation.Splash.createSplashView;
import static com.blitzapp.animatedsplash.animation.Splash.performSingleAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.screenHeight;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;
import static com.blitzapp.animatedsplash.animation.Splash.setBackgroundImage;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideDelay;
import static com.blitzapp.animatedsplash.animation.Splash.splashShow;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ArmarioPerfecto";
  }


  public void onCreate(Bundle saved) {
    super.onCreate(saved);
//    FacebookSdk.sdkInitialize(getApplicationContext());
    initiateSplash();
  }
  public void initiateSplash() {

    //create dialog
    createSplashView(MainActivity.this);

    //set background
    setBackgroundImage(R.drawable.splashbg);

    // set splash hide animation
    setSplashHideAnimation(SPLASHSLIDELEFT);

    // set splash hide delay
    setSplashHideDelay(1500);

    // Create and add images to view
    AddImageView image1 = new AddImageView(R.drawable.splashbg, screenHeight * 0.15, screenWidth, 0, 0, FIT_XY, false);

    // add group animation


    // add single animation
    performSingleAnimation(image1, SCALE, 780, 0f, 0f, 0f, 0f);

    splashShow();

  }

}
