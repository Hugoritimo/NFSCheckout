package com.example.demo.controller;

import com.example.demo.entity.NotaFiscal;
import com.example.demo.service.NotaFiscalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notas")
public class NotaFiscalController {

    private final NotaFiscalService service;

    public NotaFiscalController(NotaFiscalService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<NotaFiscal> criarNota(@RequestBody NotaFiscal nota) {
        NotaFiscal salva = service.salvarNota(nota);
        return ResponseEntity.ok(salva);
    }

    @GetMapping
    public ResponseEntity<List<NotaFiscal>> listarNotas() {
        return ResponseEntity.ok(service.listarNotas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<NotaFiscal> buscarNota(@PathVariable Long id) {
        NotaFiscal nota = service.buscarNota(id);
        if (nota != null) {
            return ResponseEntity.ok(nota);
        }
        return ResponseEntity.notFound().build();
    }
}
