import React, {useEffect, useState} from 'react';
import {BottomNavigation, BottomNavigationAction, Box} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import {theme} from "../theme";

export function CommonBottomNavBar({ backgroundColor, iconColor, selectedIconColor, iconSize, actions }) {
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
                    backgroundColor: backgroundColor ?? theme.bottomNavBar.backgroundColor,
                    '& .MuiBottomNavigationAction-root': {
                        color: iconColor ?? theme.bottomNavBar.iconColor,
                    },
                    '& .MuiBottomNavigationAction-root.Mui-selected': {
                        color: selectedIconColor ?? theme.bottomNavBar.selectedIconColor,
                    },
                    '& svg': {
                        fontSize: iconSize ?? theme.bottomNavBar.iconSize,
                    }
                }}
            >
                {actions.map((action =>
                    <BottomNavigationAction
                        value={action.path}
                        icon={action.icon}
                    />
                ))}
            </BottomNavigation>
        </Box>
    );
}