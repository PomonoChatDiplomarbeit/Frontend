class Communicator {
    constructor(){
        this.map=[]
        this.map=this.loadTestData()
    }
    loadTestData(){
        var temp = [];
        temp.push(this.newChat("Dragan"));
        temp.push(this.newChat("Sandro"));
        return temp;
    }
    getMessagesForChat(chatPartnerName) {
        console.log('partner: ' + chatPartnerName);
        return this.map.
            filter(function (elem) {
                return elem.partner==chatPartnerName;
            })[0].listofmessages;
    }
    getAllChatPartners() {
        return this.map.map(function (item) {
            return item.partner;
        })

    }
    newChat(partner){
        return {
            partner: partner,
            listofmessages: [
                    new MessageObj("Nachricht 1", partner, "Fabian"),
                    new MessageObj("Nachricht 2", partner, "Fabian")
                ]
        };
    }
    emitMessage(message){
        console.log('emitMessage entered!');
        var element;
        for (var i in this.map) {
            if (this.map[i].partner == message.receiver) {
                console.log('Message added!');
                element = this.map[i];
                this.map.splice(i,1);
                break; 
            }
        }
        element.listofmessages.push(message);
        this.map.push(element);
        //this.map.reverse();
        console.log(this.map);
    }
}