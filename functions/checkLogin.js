// จำลองฐานข้อมูลในหน่วยความจำ
let users = [
    { username: 'admin', password: '1234' },
];

// ฟังก์ชันเช็คล็อกอิน
function checkLogin(username, password) {
    if (!username || !password) {
        return { status: 400, message: "กรุณากรอกข้อมูลให้ครบ" };
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return { status: 401, message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" };
    }

    return { status: 200, message: "เข้าสู่ระบบสำเร็จ" };
}

// ฟังก์ชันสมัครสมาชิก (เก็บไว้ในหน่วยความจำชั่วคราว)
function registerUser(username, password) {
    if (!username || !password) {
        return { status: 400, message: "กรุณากรอกข้อมูลให้ครบ" };
    }

    const exists = users.find(u => u.username === username);
    if (exists) {
        return { status: 409, message: "ชื่อผู้ใช้มีอยู่แล้ว" };
    }

    users.push({ username, password });
    return { status: 201, message: "สมัครสมาชิกสำเร็จ" };
}

module.exports = { checkLogin, registerUser };