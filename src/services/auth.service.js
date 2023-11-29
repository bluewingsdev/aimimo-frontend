import axios from 'axios';

const authInstance = axios.create({
    baseURL: '/auth/'
});

class AuthService {
    //로그인
    login(user) {
        return authInstance
            .post('signin', {
                userId: user.userId,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    //로그아웃
    logout() {
        localStorage.removeItem('user');
    }
    //회원가입
    register(user, roles) {
        return authInstance.post('signup', {
            userId: user.userId,
            phoneNumber: user.phoneNumber,
            email: user.email,
            password: user.password,
            roles: roles
        });
    }
}

export default new AuthService();