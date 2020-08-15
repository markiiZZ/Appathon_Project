package gr.ntua.ece.intapp.data;

import java.util.Objects;

public class Libraries {
  private String name;
  private String city;
  private String address;
  private String postcode;
  private String email;
  private String website;

  public Libraries(){

  }

  public String getname(){
    return name;
  }

  public void setname(String name){
    this.name = name;
  }

  public String getcity(){
    return city;
  }

  public void setcity(String city){
    this.city = city;
  }

  public String getaddress(){
    return address;
  }

  public void setaddress(String address){
    this.address = address;
  }

  public String getpostcode(){
    return postcode;
  }

  public void setpostcode(String postcode){
    this.postcode = postcode;
  }

  public String getemail(){
    return email;
  }

  public void setemail(String email){
    this.email = email;
  }

  public String getwebsite(){
    return website;
  }

  public void setwebsite(String website){
    this.website = website;
  }

}
