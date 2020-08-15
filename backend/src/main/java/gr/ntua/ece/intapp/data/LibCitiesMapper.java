package gr.ntua.ece.intapp.data;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class LibCitiesMapper implements RowMapper<LibCities> {

    @Override
    public LibCities mapRow(ResultSet rs, int rowNum) throws SQLException {

      LibCities libcities = new LibCities();
      libcities.setcityname(rs.getString("City"));
      libcities.setlibraries(rs.getInt("libraries"));

      return libcities;

    }
}
