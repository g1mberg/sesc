// import { useState } from 'react';
//
// function LoginModal({ isOpen, mode, onClose, onSwitchMode }) {
//     const [loginUsername, setLoginUsername] = useState('');
//     const [loginPassword, setLoginPassword] = useState('');
//     const [regUsername, setRegUsername] = useState('');
//     const [regPassword, setRegPassword] = useState('');
//
//     if (!isOpen) return null;
//
//     const handleBackdropClick = (e) => {
//         if (e.target === e.currentTarget) onClose();
//     };
//
//     const handleLogin = async () => {
//         try {
//             const res = await fetch('/auth/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username: loginUsername, password: loginPassword }),
//             });
//             if (res.ok) {
//                 onClose();
//                 window.location.reload();
//             } else {
//                 alert('Неверный логин или пароль');
//             }
//         } catch {
//             alert('Ошибка соединения с сервером');
//         }
//     };
//
//     const handleRegister = async () => {
//         try {
//             const res = await fetch('/auth/register', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username: regUsername, password: regPassword }),
//             });
//             if (res.ok) {
//                 onClose();
//                 alert('Аккаунт создан! Войдите в систему.');
//                 onSwitchMode('login');
//             } else {
//                 alert('Ошибка регистрации или пользователь уже существует.');
//             }
//         } catch {
//             alert('Ошибка соединения с сервером');
//         }
//     };
//
//     return (
//         <>
//             {mode === 'login' && (
//                 <div className="modal" onClick={handleBackdropClick}>
//                     <div className="modal-content">
//                         <span className="close" onClick={onClose}>&times;</span>
//                         <h3>Вход</h3>
//                         <input
//                             type="text"
//                             placeholder="Логин"
//                             value={loginUsername}
//                             onChange={e => setLoginUsername(e.target.value)}
//                         />
//                         <input
//                             type="password"
//                             placeholder="Пароль"
//                             value={loginPassword}
//                             onChange={e => setLoginPassword(e.target.value)}
//                         />
//                         <button onClick={handleLogin}>Войти</button>
//                         <p>Нет аккаунта? <button onClick={() => onSwitchMode('register')}>Зарегистрироваться</button></p>
//                     </div>
//                 </div>
//             )}
//
//             {mode === 'register' && (
//                 <div className="modal" onClick={handleBackdropClick}>
//                     <div className="modal-content">
//                         <span className="close" onClick={onClose}>&times;</span>
//                         <h3>Регистрация</h3>
//                         <input
//                             type="text"
//                             placeholder="Логин"
//                             value={regUsername}
//                             onChange={e => setRegUsername(e.target.value)}
//                         />
//                         <input
//                             type="password"
//                             placeholder="Пароль"
//                             value={regPassword}
//                             onChange={e => setRegPassword(e.target.value)}
//                         />
//                         <button onClick={handleRegister}>Создать аккаунт</button>
//                         <p>Уже есть аккаунт? <button onClick={() => onSwitchMode('login')}>Войти</button></p>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
//
export default LoginModal;
