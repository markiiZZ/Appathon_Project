package gr.ntua.ece.intapp.data;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class LibrariesMapper implements RowMapper<Libraries> {

    @Override
    public Libraries mapRow(ResultSet rs, int rowNum) throws SQLException {

      Libraries libraries = new Libraries();
      libraries.setname(rs.getString("Name"));
      libraries.setcity(rs.getString("City"));
      libraries.setaddress(rs.getString("Address"));
      libraries.setpostcode(rs.getString("Postcode"));
      libraries.setemail(rs.getString("email"));
      libraries.setwebsite(rs.getString("website"));

      return libraries;

    }
}
