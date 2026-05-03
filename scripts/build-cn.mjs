import { spawnSync } from "node:child_process";
import { rmSync } from "node:fs";
import { join } from "node:path";

const projectRoot = process.cwd();
const nextBin = join(projectRoot, "node_modules", "next", "dist", "bin", "next");

rmSync(join(projectRoot, "out"), { force: true, recursive: true });

const result = spawnSync(process.execPath, [nextBin, "build", "--webpack"], {
  cwd: projectRoot,
  env: {
    ...process.env,
    STATIC_EXPORT: "true"
  },
  stdio: "inherit"
});

process.exit(result.status ?? 1);
