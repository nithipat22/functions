function login(username, password) {
    if (!username || !password) {
        return { status: 400, message: "โปรดกรองข้อมูลให้ครบ" }
    }
    if (username === "admin" && password === "1234") {
        return { status: 200, message: "เข้าสู่ระบบสำเร็จ" }
    }
    return { status: 401, message: "ชื่อหรือรหัสผ่านไม่ถูกต้อง" }
}