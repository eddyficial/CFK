'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '19728155863';
const WHATSAPP_NAME = 'David Owuori';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [initialized, setInitialized] = useState(false);
  const dragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPos({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
    setInitialized(true);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    hasMoved.current = false;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    startPos.current = { ...pos };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [pos]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) hasMoved.current = true;
    const newX = Math.max(0, Math.min(window.innerWidth - 56, startPos.current.x + dx));
    const newY = Math.max(0, Math.min(window.innerHeight - 56, startPos.current.y + dy));
    setPos({ x: newX, y: newY });
  }, []);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
    if (!hasMoved.current) {
      setIsOpen(prev => !prev);
    }
  }, []);

  const defaultMessage = encodeURIComponent(
    'Hello! I would like to inquire about your freight shipping services.'
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`;

  if (!initialized) return null;

  return (
    <div
      ref={btnRef}
      className="z-50 flex flex-col items-end gap-3"
      style={{ position: 'fixed', left: pos.x, top: pos.y, touchAction: 'none' }}
    >
      {/* Chat popup */}
      {isOpen && (
        <div
          className="animate-fade-in-up bg-card border border-border/60 rounded-2xl shadow-2xl w-[320px] overflow-hidden"
          style={{ position: 'absolute', bottom: 64, right: 0 }}
        >
          <div className="bg-[#075E54] p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">{WHATSAPP_NAME}</p>
              <p className="text-white/70 text-xs">Typically replies within an hour</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 bg-[#0b141a] min-h-[120px]">
            <div className="bg-[#1f2c34] rounded-lg rounded-tl-none p-3 max-w-[85%]">
              <p className="text-sm text-foreground">
                Hello! Welcome to Chauffeurs Freight Kenya. How can I help you with your shipment today?
              </p>
              <p className="text-[10px] text-muted-foreground mt-1 text-right">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>

          <div className="p-3 bg-card border-t border-border/30">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Start Chat
            </a>
          </div>
        </div>
      )}

      {/* Draggable WhatsApp button */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        className="whatsapp-pulse h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing select-none"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="h-6 w-6 pointer-events-none" />
        ) : (
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current pointer-events-none">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </div>
    </div>
  );
}
