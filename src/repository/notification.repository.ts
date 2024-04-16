import { DBConnectionError } from "@nabeelktr/error-handler";
import { INotificationRepository } from "../interfaces/notification.Repository";
import { Notification } from "../model/notification.entities";
import NotificationModel from "../model/schemas/notificaiton.schema";

export class NotificationRepository implements INotificationRepository {

  async getNotifications(data: any): Promise<Notification[] | null> {
    try {
      const notificaitons = await NotificationModel.find({
        instructorId: data,
      });
      return notificaitons;
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }

  async createNotification(data: Notification): Promise<Object | null> {
    try {
      const notification = await NotificationModel.create(data);
      return { success: true };
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }

  async updateStatus(id: string): Promise<Object | null> {
    try {
        const notification = await NotificationModel.findByIdAndUpdate(id, {status: "read"});
        return { success: true };
      } catch (e: any) {
        throw new DBConnectionError();
      }
  }
}
