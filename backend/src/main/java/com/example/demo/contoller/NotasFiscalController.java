package com.example.demo.contoller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotasFiscalController {
    public String hello() {

        return "Bem vindo à API de Notas Fiscais";
    }
}
