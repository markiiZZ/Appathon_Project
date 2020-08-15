
package gr.ntua.ece.intapp.api;

import gr.ntua.ece.intapp.api.resource.*;
import org.restlet.Application;
import org.restlet.Restlet;
import org.restlet.routing.Router;
import org.restlet.routing.Template;
import org.restlet.service.CorsService;
import org.restlet.engine.application.CorsFilter;
import org.restlet.data.Method;

import java.util.*;

public class RestfulApp extends Application {

 @Override
 public synchronized Restlet createInboundRoot(){

   Router router = new Router(getContext());

   router.attach("/Cities",CityResource.class);
   router.attach("/Libraries", LibraryResource.class);

   CorsFilter corsFilter = new CorsFilter(getContext(), router);
   corsFilter.setAllowedOrigins(Set.of("*"));
   corsFilter.setAllowedCredentials(true);
   corsFilter.setDefaultAllowedMethods(Set.of(Method.GET, Method.PUT, Method.POST, Method.DELETE));
   corsFilter.setAllowingAllRequestedHeaders(true);
   corsFilter.setSkippingResourceForCorsOptions(true);
   corsFilter.setMaxAge(10);

   return corsFilter;
 }
}
