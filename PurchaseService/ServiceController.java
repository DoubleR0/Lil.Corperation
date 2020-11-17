package purchase.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

@Controller
public class ServiceController {
    List<Dataservice> dataservice = new ArrayList<>(Arrays.asList(
            new Dataservice("LIP001", "XOXO Lipstick", 1),
            new Dataservice("BRO001", "NYX Brush On Palette", 1)));

    public void deleteData(String id) {
        for (int i = 0; i < dataservice.size(); i++) {
            if (dataservice.get(i).getId().equals(id)) {
                dataservice.remove(i);
                break;
            }
        }
    }

    @RequestMapping(value = "/getAllData", method = RequestMethod.GET)
    @ResponseBody
    public List<Dataservice> getAllDataservice(HttpServletResponse response) {
        return dataservice;
    }

    @RequestMapping(value = "/getData{id}", method = RequestMethod.GET)
    @ResponseBody
    public List<Dataservice> getDataservice(HttpServletRequest request, @PathVariable String id) {
        return dataservice;
    }

    @RequestMapping(value = "/Data/{id}", method = RequestMethod.DELETE)
    public String deleteDataservice(@PathVariable String id) {
        deleteData(id);
        return "Delete0";
    }

    @GetMapping("/hello")
    @ResponseBody
    public void index(HttpServletResponse response) throws IOException {
        final String uri = "http://localhost:8080/getAllData";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        // JSONObject jsonObject = new JSONObject(result);
    
        // System.out.println(jsonObject);
        response.setContentType("application/json");
        response.getWriter().print("{"+result+","+result+"}");
    }

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        // final String uri = "http://localhost:8080/getAllData";
        // RestTemplate restTemplate = new RestTemplate();
        // String result = restTemplate.getForObject(uri, String.class);
    
        // System.out.println(result);
        // return result;
		return "greeting";
    }

    // PurchaseService
    // send cost confirmed to Payment and waiting for response 
    @RequestMapping(value = "/confirmordered/{purchaseid}", method = RequestMethod.GET)
    @ResponseBody
    public void confirmordered(HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.getWriter().print(dataservice);
    }

    // get json Object from OrderService and call other Service for example ShippingService, PaymentService, and location from CustomerService
    @RequestMapping(value = "/detailorder", method = RequestMethod.POST)
    @ResponseBody
    public void detailorder(HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.getWriter().print(dataservice);
    }

    // look all order in log for maintenance or other...
    @RequestMapping(value = "/log", method = RequestMethod.GET)
    @ResponseBody
    public void log(HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.getWriter().print(dataservice);
    }

    // look One ordered for maintenance or other...
    @RequestMapping(value = "/log/{purchaseid}", method = RequestMethod.GET)
    @ResponseBody
    public void logOne(HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.getWriter().print(dataservice);
    }

    // update payment from PaymentService and save to Dataservice, send data to ShipingService and send to OrderService to save history order
    @RequestMapping(value = "/updatepaymentlog/{purchaseid}", method = RequestMethod.PATCH)
    @ResponseBody
    public void updatepaymentlog(HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.getWriter().print(dataservice);
    }

    // add Dataservice to log for emergency or maintenance
    @RequestMapping(value = "/addlog/{purchaseid}", method = RequestMethod.PUT)
    @ResponseBody
    public void addlog(HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.getWriter().print(dataservice);
    }

    // delete Dataservice from log when ordered finished or maintenance
    @RequestMapping(value = "/deletelog/{purchaseid}", method = RequestMethod.GET)
    @ResponseBody
    public void deletelog(HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.getWriter().print(dataservice);
    }
}
