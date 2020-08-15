package gr.ntua.ece.intapp.data;

import java.util.Objects;

public class LibCities {
  private String cityname;
  private int libraries;

  public LibCities(){

  }

  public String getcityname(){
    return cityname;
  }

  public void setcityname(String cityname){
    this.cityname = cityname;
  }

  public int getlibraries(){
    return libraries;
  }

  public void setlibraries(int libraries){
    this.libraries = libraries;
  }

}
