
class SongNode {
    constructor(song) {
        this.song = song;
        this.next = null;
    }
}

class Playlist {
    constructor() {
        this.head = null;
    }

    addSongAtEnd(song) {
        let newNode = new SongNode(song);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    addSongAtBeginning(song) {
        let newNode = new SongNode(song);
        newNode.next = this.head;
        this.head = newNode;
    }

    deleteSongByName(song) {
        if (this.head === null) return;

        if (this.head.song === song) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.song !== song) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    deleteSongByPosition(position) {
        if (this.head === null || position <= 0) return;

        if (position === 1) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let count = 1;

        while (current !== null && count < position - 1) {
            current = current.next;
            count++;
        }

        if (current !== null && current.next !== null) {
            current.next = current.next.next;
        }
    }

    showPlaylist() {
        if (this.head === null) {
            console.log("Playlist is empty");
            return;
        }

        let current = this.head;
        let songs = [];
        while (current !== null) {
            songs.push(current.song);
            current = current.next;
        }
        console.log(songs.join(" → "));
    }
}

let myPlaylist = new Playlist();

myPlaylist.addSongAtEnd("Shape of You");
myPlaylist.addSongAtEnd("Believer");
myPlaylist.addSongAtBeginning("Perfect");
myPlaylist.showPlaylist();  

myPlaylist.deleteSongByName("Believer");
myPlaylist.showPlaylist();  

myPlaylist.deleteSongByPosition(2);
myPlaylist.showPlaylist();