import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma/client"; // Caminho ajustado

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        // Corrigindo a tipagem do evento
        this.$on('beforeExit' as never, async () => {
            await app.close();
        });
    }
}