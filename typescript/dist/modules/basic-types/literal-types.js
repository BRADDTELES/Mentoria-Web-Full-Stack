// let logType: string = 'info'
// logType = 'warn'
export function logger(type, message) {
    switch (type) {
        case 'info':
            console.log(`Info: ${message}`);
            break;
        case 'warn':
            console.warn(`Warn: ${message}`);
            break;
        case 'error':
            console.error(`Error: ${message}`);
            break;
    }
}
logger("warn", 'Log com alguma informação sobre o que houve!');
