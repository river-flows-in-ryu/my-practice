// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const prisma = require("../../util/prisma");
import { withSessionRoute } from "../../lib/withSession";

const get = async (response_payload) => {
    const test = "next api 테스트";

    response_payload.status = "SUCCESS";
    response_payload.result = test;
    response_payload.code = "good";
};

async function handler(req, res) {
    const response_payload = {
        status: null,
        result: null,
        code: null,
    };
    try {
        switch (req.method) {
            case "GET":
                await get(response_payload);
                break;
            case "POST":
                break;
            case "PUT":
                break;
            case "DELETE":
                break;
            default:
                break;
        }
    } catch (error) {
        response_payload.status = "FAILURE";
        response_payload.result = error.message;
        response_payload.code = "설정 필요";
    } finally {
        // prisma.prisma.$disconnect();
        res.status(200).json(response_payload);
    }
}

export default withSessionRoute(handler);
