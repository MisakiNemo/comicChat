
class WebsocketService {
    private ws: WebSocket | null = null;

    public connect(url: string) {
        this.ws = new WebSocket(url);

        this.ws.onopen = () => {
            console.log('connected');
        }
        this.ws.onmessage =   async (event) => {
            console.log(event.data);
        }
        this.ws.onclose = () => {
            console.log('disconnected');
        }
        this.ws.onerror = (error) => {
            console.log(error);
        }
    }

    sendMessage(message: string) {
        if (this.ws) {
            this.ws.send(message)
        }
    }

    public disconnect() {
        if (this.ws) {
            this.ws.close();
        }
    }


}


export default new WebsocketService();






