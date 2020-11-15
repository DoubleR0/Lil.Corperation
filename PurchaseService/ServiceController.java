package purchase.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ServiceController {
    List<Dataservice> dataservice = new ArrayList<>(Arrays.asList(
            new Dataservice("LIP001", "XOXO Lipstick", 1),
            new Dataservice("BRO001", "NYX Brush On Palette", 1)
));

public void deleteData(String id){
    for(int i = 0; i < dataservice.size(); i++){
        if(dataservice.get(i).getId().equals(id)) {
            dataservice.remove(i);
            break;
        }
    }
}

@RequestMapping(value = "/getAllData", method=RequestMethod.GET)
@ResponseBody
public List<Dataservice> getAllDataservice(){
    return dataservice;
}

@RequestMapping(value = "/getData{id}", method=RequestMethod.GET)
@ResponseBody
public List<Dataservice> getDataservice(HttpServletRequest request, @PathVariable String id){
    return dataservice;
}

@RequestMapping(value = "/Data/{id}", method=RequestMethod.DELETE)
public String deleteDataservice(@PathVariable String id) {
    deleteDataservice(id);
    return "Delete0";
}

@RequestMapping("/hello")
public String index() {
        return "Hello wolrd!";
    }

@GetMapping("/greeting")
public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
		return "greeting";
    }

}
