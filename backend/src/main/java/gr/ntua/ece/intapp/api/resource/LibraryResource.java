package gr.ntua.ece.intapp.api.resource;

import gr.ntua.ece.intapp.api.representation.JsonMapRepresentation;
import gr.ntua.ece.intapp.conf.Configuration;
import gr.ntua.ece.intapp.data.DataAccess;
import gr.ntua.ece.intapp.data.DataAccessException;
import gr.ntua.ece.intapp.data.Libraries;
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

public class LibraryResource extends ServerResource {

    private final DataAccess dataAccess = Configuration.getInstance().getDataAccess();

    @Override
    protected Representation get () throws ResourceException {
        //Create a new restlet form

        Series headers =(Series) getRequestAttributes().get("org.restlet.http.headers");
        String name = headers.getFirstValue("name");
        System.out.println(name);
        if( name==null ) throw new ResourceException(400,"Bad request");
        Optional<List<Libraries>> opt = dataAccess.fetchlibraryall(name);
        if(opt.isPresent()){
          System.out.println("oxi keni library");
          return new JsonMapRepresentation(Map.of("Library Info",opt.get()));
        }else{
          throw new ResourceException(400,"Bad request");
        }
    }

}
