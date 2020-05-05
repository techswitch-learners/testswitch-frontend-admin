export default function getSessionIdFromCookie(cookie: string): string {
    const sessionId = cookie.split(";")
        .find(element => element
            .startsWith("sessionID="))
    if (!sessionId) {
        return "";
    }
    return sessionId.split("=")[1];
}