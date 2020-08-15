package gr.ntua.ece.intapp.data;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CitiesMapper implements RowMapper<Cities> {

    @Override
    public Cities mapRow(ResultSet rs, int rowNum) throws SQLException {

      Cities cities = new Cities();
      cities.setcityname(rs.getString("Name"));

      return cities;

    }
}
