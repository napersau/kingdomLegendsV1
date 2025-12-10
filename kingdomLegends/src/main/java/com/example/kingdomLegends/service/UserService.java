package com.example.kingdomLegends.service;

import com.example.kingdomLegends.dto.GoogleAccountDTO;
import com.example.kingdomLegends.dto.request.UserRequest;
import com.example.kingdomLegends.dto.response.UserResponse;

import java.util.List;

public interface UserService {
    UserResponse createUser(UserRequest userCreateRequest);
    List<UserResponse> getUsers();
    UserResponse findUserById(Long userId);
    UserResponse updateUser(Long id,UserRequest userUpdateRequest);
    UserResponse getMyInfo();
    UserResponse createByGoogleAccount(GoogleAccountDTO googleAccountDTO);
    UserResponse changePassword(Long id, UserRequest userRequest);
}
