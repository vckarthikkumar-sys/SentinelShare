export type DemoRecipient = {
  userId: string;
  deviceId: string;
  status: "Online" | "Offline" | "Blocked";
  authorized: boolean;
};

export type TransferPayload = {
  fileName: string;
  fileType: string;
  fileSize: string;
  sender: string;
  recipient: DemoRecipient;
  passwordProtected: boolean;
};

/**
 * Local demo seam for the future Expo / React Native LAN transfer layer.
 * Replace these methods with Wi-Fi discovery and device-to-device transport later.
 */
export class FileTransferService {
  async discoverDevices(): Promise<DemoRecipient[]> {
    return [
      { userId: "Z-104", deviceId: "DEV-72A1", status: "Online", authorized: true },
      { userId: "Z-105", deviceId: "DEV-82B4", status: "Offline", authorized: true },
      { userId: "Y-207", deviceId: "UNKNOWN-91A2", status: "Blocked", authorized: false },
    ];
  }

  async sendFile(payload: TransferPayload) {
    return { transferId: "FILE-8F29A1", status: "received" as const, payload };
  }

  async receiveFile(transferId: string) {
    return { transferId, status: "ready" as const };
  }

  async getTransferStatus(transferId: string) {
    return { transferId, status: "ready" as const };
  }

  verifyAccess(userId: string, deviceId: string, recipient: DemoRecipient) {
    return recipient.authorized && recipient.userId === userId && recipient.deviceId === deviceId;
  }
}

export const fileTransferService = new FileTransferService();
