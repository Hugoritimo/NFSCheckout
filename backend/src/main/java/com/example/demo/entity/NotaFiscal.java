package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data

public class NotaFiscal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String chaveAcesso;

    private String eminente;
    private String destinatario;
    private Double valorTotal;
    private LocalDateTime dataEmissao;

    @Enumerated(EnumType.STRING)
    private StatusNota status;

    public enum StatusNota {

        PENDENTE, VALIDADA, INVALIDA
    }
}
