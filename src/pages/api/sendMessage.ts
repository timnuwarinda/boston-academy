import Airtable from "airtable"

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE || "")

const table = base("Messages")

export default async (req: any, res: any) => {
    const session = {
        "First Name": req.body.firstName,
        "Last Name": req.body.lastName,
        "Email": req.body.email,
        "Message": req.body.message
    }

    console.log(session)
    const body = {
        fields: session
    }
    try {
        const createdRecords = await table.create([body,])
        const createdRecord = createdRecords[0]
        res.status = 200
        res.json(createdRecord)
    } catch (error: any) {
        console.error(error)
        return error
    }
}