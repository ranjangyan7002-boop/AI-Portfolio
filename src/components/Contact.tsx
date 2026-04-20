import { motion } from 'motion/react';

export default function Contact() {
  const contactGroups = [
    { 
      label: 'Whatsapp', 
      links: [
        { name: '+91 7002798092', url: 'https://wa.me/917002798092' }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      {contactGroups.map((group, i) => (
        <div key={group.label} className="flex flex-col gap-2">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-[10px] uppercase tracking-[0.15em] text-[#555] flex justify-between items-center"
          >
            <span>{group.label}</span>
          </motion.div>
          <div className="flex gap-2">
            {group.links.map((link, j) => (
              <motion.a
                key={link.name}
                href={link.url}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + j * 0.05 }}
                className="text-[14px] text-white hover:border-b hover:border-white transition-all duration-200"
              >
                {link.name}{j < group.links.length - 1 ? ' / ' : ''}
              </motion.a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
