import express from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

app.use(express.json());

app.get("/api/v1/health", (_req, res) => {
    res.status(200).json({
        status: "ok",
        service: "jobflow-api",
    });
});

app.listen(PORT, () => {
    console.log(`JobFlow API running on http://localhost:${PORT}`);
});
