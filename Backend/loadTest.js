import http from "k6/http";
import { check } from "k6";

export default function () {
  const response = http.get("http://192.168.1.44:5002");
  check(response, { "status is 200": (r) => r.status === 200 });
}
