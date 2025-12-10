package com.example.kingdomLegends.service;

import com.example.kingdomLegends.dto.request.AuthenticationRequest;
import com.example.kingdomLegends.dto.request.IntrospectRequest;
import com.example.kingdomLegends.dto.request.RefreshRequest;
import com.example.kingdomLegends.dto.response.AuthenticationResponse;
import com.example.kingdomLegends.dto.response.IntrospectResponse;
import com.nimbusds.jose.JOSEException;

import java.text.ParseException;

public interface AuthenticationService {
    AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest);
    IntrospectResponse introspect(IntrospectRequest request) throws JOSEException, ParseException;
//    void logout(LogoutRequest request) throws ParseException, JOSEException;
    AuthenticationResponse refreshToken(RefreshRequest request) throws ParseException, JOSEException;
}
