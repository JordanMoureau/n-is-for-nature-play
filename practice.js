import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "src", "app", "blog", "posts");
const entries = fs.readdirSync(postsDir, { withFileTypes: true });
