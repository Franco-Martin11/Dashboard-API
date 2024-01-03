import { v4 } from "uuid";

function uuidGenerator() {
  const uuid = v4();
  const truncatedUuid = uuid.replace(/-/g, "").slice(0, 8);
  return truncatedUuid;
}

export default uuidGenerator;
