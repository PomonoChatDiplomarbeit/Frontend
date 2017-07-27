class Communicator {
    static getMessagesForChat(chatPartnerName) {
        console.log('partner: ' + chatPartnerName);
    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' from another static method';
    }
}