package com.example.demo.service;

import com.example.demo.entity.NotaFiscal;
import com.example.demo.repository.NotaFiscalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotaFiscalService {

    private final NotaFiscalRepository repository;

    public NotaFiscalService(NotaFiscalRepository repository) {
        this.repository = repository;
    }

    public NotaFiscal salvarNota(NotaFiscal nota) {
        return repository.save(nota);
    }

    public List<NotaFiscal> listarNotas() {
        return repository.findAll();
    }
}
