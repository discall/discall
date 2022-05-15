package com.ufersa.discall.model;

public class UserInGroup {
    private User user;
    private Groupchat group;
    private UserType type;
    enum UserType { REQUEST, COMMON, ADMIN };
}
