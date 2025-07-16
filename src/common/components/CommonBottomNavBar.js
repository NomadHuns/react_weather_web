import React, {useEffect, useState} from 'react';
import {BottomNavigation, BottomNavigationAction, Box} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import {MdLocationOn} from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi";

export function CommonBottomNavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    // 현재 경로에 따라 초기 value를 설정하기 위한 state
    const [value, setValue] = useState(location.pathname);

    // URL이 변경될 때마다 BottomNavigation의 활성 탭을 업데이트
    useEffect(() => {
        setValue(location.pathname);
    }, [location.pathname]);

    const handleChange = (event, newValue) => {
        // 탭 상태를 업데이트하고 해당 경로로 페이지 이동
        setValue(newValue);
        navigate(newValue);
    };

    return (
        // Box 컴포넌트를 사용해 화면 하단에 고정
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                sx={{
                    backgroundColor: 'transparent',
                    '& .MuiBottomNavigationAction-root': {
                        color: '#FFFFFF' // 원하는 비활성 색상
                    },
                    '& .Mui-selected': {
                        color: 'tomato' // 테마의 기본 색상을 사용하는 것을 권장
                    },
                    // 아이콘만 색상을 변경하고 싶을 경우
                    // '& .Mui-selected .MuiSvgIcon-root': {
                    //   color: 'tomato'
                    // }
                }}
            >
                <BottomNavigationAction
                    value="/main"
                    icon={<MdLocationOn size={'40px'}/>}
                    // sx={{
                    //     '&.Mui-selected': {
                    //         color: 'tomato' // 원하는 선택 색상을 지정
                    //     }
                    // }}
                />
                <BottomNavigationAction
                    value="/detail"
                    icon={<GiHamburgerMenu size={'40px'}/>}
                    // sx={{
                    //     '&.Mui-selected': {
                    //         color: 'tomato' // 원하는 선택 색상을 지정
                    //     }
                    // }}
                />
            </BottomNavigation>
        </Box>
    );
}