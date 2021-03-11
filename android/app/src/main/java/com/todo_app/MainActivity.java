package com.todo_app;
import android.os.Bundle; //Bootsplash
import com.facebook.react.ReactActivity;
import com.zoontek.rnbootsplash.RNBootSplash; //Bootsplash
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "todo_app";
  }

//Bootsplash
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    RNBootSplash.init(R.drawable.bootsplash, MainActivity.this); // <- display the generated bootsplash.xml drawable over our MainActivity
  }

}
