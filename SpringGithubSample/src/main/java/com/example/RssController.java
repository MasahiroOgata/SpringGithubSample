package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RssController {
	
	@GetMapping("rss")
	public String getRss() {
		return "rss";
	}

}
