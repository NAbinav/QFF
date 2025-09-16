import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "./Dialogue";

const DayOne = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <a className="more text-base translate-y-2">
          View Day 1 Schedule
        </a>
      </DialogTrigger>
      <DialogContent className="dialogue text-base max-w-2xl max-h-[80vh] overflow-y-auto p-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center pb-4" style={{borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
            <h2 className="text-2xl font-bold mb-1">DAY 1</h2>
            {/* <p className="opacity-70">Fall Fest 2025</p> */}
          </div>

          {/* Morning Session */}
          <div className="p-5 rounded-lg" style={{
            backgroundColor: 'rgba(0,0,0,0.03)', 
            borderLeft: '4px solid white'
          }}>
            <h3 className="font-semibold text-lg mb-4">Morning Session</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-xs px-3 py-2 rounded font-medium min-w-[110px] text-center" 
                     style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                  8:30 - 11:30 AM
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">Opening Ceremony</p>
                  <p className="text-sm opacity-80 mb-1">Introduction & Guest Speakers</p>
                  <p className="text-xs opacity-60">Chancellor/Vice Chancellor + IBM (L.Venkat Sub)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-xs px-3 py-2 rounded font-medium min-w-[110px] text-center"
                     style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                  11:30 AM - 1:00 PM
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">Initial Workshop</p>
                  <p className="text-sm opacity-80">Conceptual ideas & IBM Notebooks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lunch Break */}
          <div className="p-5 rounded-lg" style={{
            backgroundColor: 'rgba(0,0,0,0.02)', 
            borderLeft: '4px solid white'
          }}>
            <div className="flex items-center space-x-4">
              <div className="text-xs px-3 py-2 rounded font-medium min-w-[110px] text-center"
                   style={{backgroundColor: 'rgba(0,0,0,0.08)'}}>
                1:00 - 2:00 PM
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Lunch Break</p>
                <p className="text-sm opacity-80">Networking & Refreshments</p>
              </div>
            </div>
          </div>

          {/* Afternoon Session */}
          <div className="p-5 rounded-lg" style={{
            backgroundColor: 'rgba(0,0,0,0.03)', 
            borderLeft: '4px solid white'
          }}>
            <h3 className="font-semibold text-lg mb-4">Afternoon Session</h3>
            <div className="flex items-start space-x-4">
              <div className="text-xs px-3 py-2 rounded font-medium min-w-[110px] text-center"
                   style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                2:00 - 4:00 PM
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Gamified Challenge</p>
                <p className="text-sm opacity-80 mb-3">4 Basic Level Notebooks</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: 'rgba(0,0,0,0.06)'}}>
                    Discord Bot
                  </span>
                  <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: 'rgba(0,0,0,0.06)'}}>
                    Points System
                  </span>
                  <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: 'rgba(0,0,0,0.06)'}}>
                    Canvas Integration
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Info */}
          <div className="p-4 rounded-lg" style={{backgroundColor: 'rgba(0,0,0,0.02)'}}>
            <h4 className="font-medium mb-2">📍 Venue Information</h4>
            <p className="opacity-80">AB1 - Netaji Auditorium</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DayOne;