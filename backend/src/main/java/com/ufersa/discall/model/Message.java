package com.ufersa.discall.model;

import java.time.LocalDateTime;

public class Message {
    private int id;
    private Groupchat group;
    private User author;
    private String content;
    private String filePath;// Default = null
    private String folder; // Somente se filePath != null
    private LocalDateTime dateTime;
}
