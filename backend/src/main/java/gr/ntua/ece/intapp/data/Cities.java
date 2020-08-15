package gr.ntua.ece.intapp.data;

import java.util.Objects;

public class Cities {
  private String libname;
  private String cityname;

  public Cities(){

  }

  public String getlibname(){
    return libname;
  }

  public void setlibname(String libname){
    this.libname = libname;
  }

  public String getcityname(){
    return cityname;
  }

  public void setcityname(String cityname){
    this.cityname = cityname;
  }

}
