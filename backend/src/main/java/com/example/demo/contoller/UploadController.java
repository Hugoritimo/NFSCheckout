package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException


@RestController
@RequestMapping("/api/upload")
@CrossOrigin(origins = "*")

public class UploadController {
    
    private statc final String UPLOAD_DIR = "uploads/";

    @PostMapping
    public ResponseEntity<String> uploadArquivo(@RequestParam("file") MultipartFile file) {

        try{
            File uploadDir = new File(UPLOAD_DIR);
            IF (!uploadDir.exists()) {
                (!uploadDir.exists())
        }
    }
}