package gr.ntua.ece.intapp.api.resource;

import gr.ntua.ece.intapp.api.representation.JsonMapRepresentation;
import gr.ntua.ece.intapp.conf.Configuration;
import gr.ntua.ece.intapp.data.DataAccess;
import gr.ntua.ece.intapp.data.DataAccessException;
import gr.ntua.ece.intapp.data.Cities;
import org.restlet.ext.json.JsonRepresentation;
import org.json.JSONObject;
import org.restlet.data.Status;
import org.restlet.data.Form;
import org.restlet.representation.Representation;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;
import org.restlet.resource.Post;
import org.restlet.util.Series;
import org.restlet.data.Header;

import java.util.*;

public class CityResource extends ServerResource {

    private final DataAccess dataAccess = Configuration.getInstance().getDataAccess();

    @Override
    protected Representation get () throws ResourceException {
        //Create a new restlet form

        Series headers =(Series) getRequestAttributes().get("org.restlet.http.headers");
        String city = headers.getFirstValue("city");
        System.out.println(city);
        if( city==null ) throw new ResourceException(400,"Bad request");
        Optional<List<Cities>> opt = dataAccess.fetchlibrary(city);
        if(opt.isPresent()){
          System.out.println("oxi keni");
          return new JsonMapRepresentation(Map.of("LibrariesList",opt.get()));
        }else{
          throw new ResourceException(400,"Bad request");
        }
    }
}
