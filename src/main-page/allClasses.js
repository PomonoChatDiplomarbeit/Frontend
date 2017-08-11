class Message {
    constructor(sender, type, data, timestamp) {
        this.sender = sender
        this.type = type
        this.data = data
        this.timestamp = timestamp
    }
}
class User {
    constructor(username) {
        this.username = username
    }
}
class Room {
    constructor(name, id, users, messages, type) {
        this.name = name
        this.id = id
        this.users = users
        this.messages = messages
        this.type = type
    }
}