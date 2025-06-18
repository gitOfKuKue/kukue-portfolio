import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="your-section"
>
  <h2 className="text-3xl">Scroll into View</h2>
</motion.div>

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
