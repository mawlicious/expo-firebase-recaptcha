export default class FirebaseRecaptchaVerifier {
    token;
    constructor(token) {
        this.token = token;
    }
    get type() {
        return 'recaptcha';
    }
    async verify() {
        return this.token;
    }
    async _reset() {
        return ;
    }
}
//# sourceMappingURL=FirebaseRecaptchaVerifier.js.map